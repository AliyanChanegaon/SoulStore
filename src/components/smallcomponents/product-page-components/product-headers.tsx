import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

interface FunctionProp {
  data: { path: string; page: string };
  setSort: (value: string) => void;
}

function ProductHeaders(data: FunctionProp) {
  return (
    <Stack flex={4}>
      <Stack >
        <Breadcrumb fontSize={12}>
          <BreadcrumbItem ml={{base:"10px",md:"0px"}} _hover={{ border: "none" }}>
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
        <Text display={{base:"none",md:"block"}} flex={1}>{data.data.page}</Text>
        <Spacer flex={2} />
        <Select
          onChange={(e) => data.setSort(e.target.value)}
          width={{base:"40%",md:"24%"}}
          placeholder="Sort"
          mr={4}
        >
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
