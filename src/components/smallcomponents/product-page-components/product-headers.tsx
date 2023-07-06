import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Select, Spacer, Stack, Text } from "@chakra-ui/react"


const ProductHeaders = () => {
  return (
    <Stack flex={4}>
        <Stack>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/men">Mens</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
          <Stack flex={4} flexDirection="row" justifyContent="space-between">
            <Text flex={1}>Mens T-Shirts</Text>
            <Spacer flex={2} />
            <Select flex={1} placeholder="Select Sorting Options" mr={4}>
              <option value="A-to-Z">A to Z</option>
              <option value="Low-to-High">Low to High</option>
              <option value="High-to-low">High to low</option>
              <option value="Newest">Newest</option>
              <option value="Popularity">Popularity</option>
            </Select>
          </Stack>
    </Stack>
  )
}

export default ProductHeaders