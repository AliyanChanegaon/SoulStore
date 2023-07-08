import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function ProductHeaders(data: { data: { path: string; page: string } }) {

  const color = useColorModeValue("red.500", "#2a9df4");


  
  return (
    <Stack flex={4}>
      <Stack>
        <Breadcrumb fontSize={12}>
          <BreadcrumbItem _hover={{border:"none"}} >
            <BreadcrumbLink href={`/${data.data.path}`}>
              {data?.data?.path.charAt(0).toUpperCase() +
                data?.data?.path.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
      <Stack flex={4} flexDirection="row" justifyContent="space-between">
        <Text flex={1}>{data.data.page}</Text>
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
  );
}

export default ProductHeaders;
