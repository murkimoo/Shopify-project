import { json, LoaderFunctionArgs, ActionFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import { 
  Page, 
  Layout, 
  Card, 
  ResourceList, 
  ResourceItem, 
  Thumbnail,
  Button,
  Banner,
  Text,
  Box,
  BlockStack,
  InlineStack
} from "@shopify/polaris";
import { getProducts, getProduct } from "~/models/product.server";
import { 
  getWishlist, 
  addToWishlist, 
  removeFromWishlist, 
  isInWishlist,
  wishlistCookie 
} from "~/models/wishlist.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const products = getProducts();
  const wishlistItems = await getWishlist(request);
  
  const productsWithWishlistStatus = await Promise.all(
    products.map(async (product) => ({
      ...product,
      inWishlist: await isInWishlist(request, product.id)
    }))
  );
  
  return json({ 
    products: productsWithWishlistStatus,
    wishlistCount: wishlistItems.length
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const productId = formData.get("productId") as string;
  const action = formData.get("action") as string;
  
  let wishlistItems;
  
  if (action === "add") {
    wishlistItems = await addToWishlist(request, productId);
  } else if (action === "remove") {
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

export default function Index() {
  const { products, wishlistCount } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  return (
    <Page title="Products">
      <Layout>
        <Layout.Section>
          <Banner
            title={`Your Wishlist has ${wishlistCount} items`}
            action={{content: 'View Wishlist', url: '/wishlist'}}
          />
        </Layout.Section>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'product', plural: 'products' }}
              items={products}
              renderItem={(product) => {
                const { id, title, price, description, image, inWishlist } = product;
                
                return (
                  <ResourceItem
                    id={id}
                    media={<Thumbnail source={image} alt={title} />}
                    accessibilityLabel={`View details for ${title}`}
                    onClick={() => {}}
                  >
                    <InlineStack>
                      <BlockStack>
                        <Text variant="headingMd" as="h3">{title}</Text>
                        <Text as="p">${price.toFixed(2)}</Text>
                        <Text as="p">{description}</Text>
                      </BlockStack>
                      <BlockStack>
                          <BlockStack>
                            <Button variant="primary">Add to Cart</Button>
                            <Form method="post">
                              <input type="hidden" name="productId" value={id} />
                              <input 
                                type="hidden" 
                                name="action" 
                                value={inWishlist ? "remove" : "add"} 
                              />
                              <Button 
                                submit
                                disabled={isSubmitting}
                                variant={inWishlist ? "monochromePlain" : "plain"}
                              >
                                {inWishlist ? "Saved to Wishlist" : "Save for Later"}
                              </Button>
                            </Form>
                          </BlockStack>
                        </BlockStack>
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