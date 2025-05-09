import { json, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import { 
  Page, 
  Layout, 
  Card, 
  ResourceList, 
  ResourceItem, 
  Thumbnail,
  Button,
  EmptyState,
  Text,
  BlockStack,
  InlineStack,
  Box
} from "@shopify/polaris";
import { getProduct } from "~/models/product.server";
import { 
  getWishlist, 
  removeFromWishlist,
  wishlistCookie 
} from "~/models/wishlist.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const wishlistItems = await getWishlist(request);
  
  const wishlistProducts = wishlistItems
    .map(id => getProduct(id))
    .filter(Boolean);
  
  return json({ wishlistProducts });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const productId = formData.get("productId") as string;
  const action = formData.get("action") as string;
  
  let wishlistItems;
  
  if (action === "remove") {
    wishlistItems = await removeFromWishlist(request, productId);
  }
  
  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await wishlistCookie.serialize(wishlistItems),
      },
    }
  );
};

export default function Wishlist() {
  const { wishlistProducts } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  if (wishlistProducts.length === 0) {
    return (
      <Page
        title="Your Wishlist"
        backAction={{
          content: 'Products',
          url: '/',
        }}
      >
        <Layout>
          <Layout.Section>
            <Card>
              <EmptyState
                heading="Your wishlist is empty"
                image="/empty-wishlist.svg"
                action={{content: 'Browse products', url: '/'}}
              >
                <p>Save items for later by clicking "Save for Later" on product pages.</p>
              </EmptyState>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  
  return (
    <Page
      title="Your Wishlist"
      backAction={{
        content: 'Products',
        url: '/',
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'product', plural: 'products' }}
              items={wishlistProducts}
              renderItem={(product) => {
                const { id, title, price, description, image } = product;
                
                return (
                  <ResourceItem
                    id={id}
                    media={<Thumbnail source={image} alt={title} />}
                    accessibilityLabel={`View details for ${title}`}
                    onClick={() => {}}
                  >
                    <InlineStack>
                      <Box>
                        <Text variant="headingMd" as="h3">{title}</Text>
                        <Text as="p">${price.toFixed(2)}</Text>
                        <Text as="p">{description}</Text>
                      </Box>
                      <Box>
                        <BlockStack>
                          <Button variant="primary">Move to Cart</Button>
                          <Form method="post">
                            <input type="hidden" name="productId" value={id} />
                            <input type="hidden" name="action" value="remove" />
                            <Button 
                              submit
                              disabled={isSubmitting}
                              variant="primary"
                              tone="critical"
                            >
                              Remove
                            </Button>
                          </Form>
                        </BlockStack>
                      </Box>
                    </InlineStack>
                  </ResourceItem>
                );
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}