import { HStack, Spacer, Stack, StackItem, VStack } from "@chakra-ui/react";
import ProductHeaders from "../product-page-components/product-headers";
import LeftFilters from "../product-page-components/left-filters";
import TopSlider from "../../top-slider";
import ProductList from "./product-list";
import { DataModel } from "../../../utils/model/data-model";
import { ProductModel } from "../../../utils/model/product-data-model";
import { useMemo, useState } from "react";

export const ProductPage = (data: DataModel) => {
  const [productData, setProductData] = useState<ProductModel[]>(
    data?.products
  );
  const [sort, setSort] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<Array<string>>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const filterCondition = (item: ProductModel) => {
    const { Category, sizes } = item;

    // Filter by category
    const categoryCondition =
      selectedCategory.length === 0 ||
      selectedCategory.find(
        (el) =>
          el.toLocaleLowerCase().trim() == Category.toLocaleLowerCase().trim()
      );

    // Filter by size
    const sizeCondition =
      selectedSize === "" ||
      sizes.find(
        (el) =>
          el.toLocaleLowerCase().trim() ==
          selectedSize.toLocaleLowerCase().trim()
      );

    return categoryCondition && sizeCondition;
  };

  // const sortConditon = () => {
  //   return;
  // };

  useMemo(() => {
    if (sort === "A-to-Z") {
      const sortedArray = [...data.products].sort(
        (a: ProductModel, b: ProductModel) => {
          return a.name.localeCompare(b.name);
        }
      );

      setProductData(sortedArray);
    }

    if (sort === "Low-to-High") {
      const sortedArray = [...data.products].sort(
        (a: ProductModel, b: ProductModel) => {
          return parseInt(a.price) - parseInt(b.price);
        }
      );

      setProductData(sortedArray);
    }

    if (sort === "High-to-low") {
      const sortedArray = [...data.products].sort(
        (a: ProductModel, b: ProductModel) => {
          return parseInt(b.price) - parseInt(a.price);
        }
      );

      setProductData(sortedArray);
    }

    if (sort === "Newest" || sort === "Popularity") {
      const sortedArray = [...data.products].sort(() => Math.random() - 0.5);

      setProductData(sortedArray);
    }
  }, [sort]);

  return (
    <VStack maxW="1400px!important" w="100%" flex={5}>
      {data?.sliderImages && (
        <Stack maxW="1400px!important" w="100%">
          <TopSlider data={data!.sliderImages} collection="mens-TopSection" />
        </Stack>
      )}

      <HStack w="100%" flex={5} display={{ base: "block", md: "none" }}>
        <ProductHeaders data={data?.breadcrumbData} setSort={setSort} />
        <LeftFilters
          data={data?.options}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </HStack>
      <HStack w="100%" flex={5}>
        <StackItem flex={1} display={{ base: "none", md: "block" }}>
          <Spacer />
        </StackItem>

        <StackItem flex={4} display={{ base: "none", md: "inline" }}>
          <ProductHeaders data={data?.breadcrumbData} setSort={setSort} />
        </StackItem>
      </HStack>

      <Stack flex={5} flexDirection="row">
        <StackItem flex={1} display={{ base: "none", md: "block" }}>
          <LeftFilters
            data={data?.options}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </StackItem>
        <StackItem flex={4}>
          <ProductList
            data={productData}
            filterCondition={filterCondition}
            name={data?.breadcrumbData?.path}
          />
        </StackItem>
      </Stack>
    </VStack>
  );
};
