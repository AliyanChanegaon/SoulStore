import { HStack, Image, Stack, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { kidsItem, mensItem, womensItem } from "../../utils/Data";
import { ProductModel } from "../../utils/models/product-data-model";
import "./search-module.css";

const dataTobeMatch = [...mensItem, ...womensItem, ...kidsItem];

const SearchBar = () => {
  function shortenText(text: string) {
    if (text.length > 18) {
      return text.substring(0, 15) + "...";
    }
    return text;
  }

  const navigate = useNavigate();

  const formatResult = (item: any) => {
    return (
      <HStack>
        <Stack w="35%">
          <Image p={4} boxSize={100} src={item.Display_image} />
        </Stack>
        <Stack w="65%">
          <Text>{shortenText(item.name)}</Text>
        </Stack>
      </HStack>
    );
  };

  const handleOnSearch = (string: string, results: ProductModel[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  // const handleOnHover = (result:any) => {
  //   // the item hovered
  //   console.log(result)
  // }

  const handleOnSelect = (item: any) => {
    // the item selected

    navigate(`/page/product/${item.id}`);
    console.log(item);
  };

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  return (
    <Stack>
      <ReactSearchAutocomplete
        // data to be match
        showIcon={false}
        items={dataTobeMatch}
        onSearch={handleOnSearch}
        // onHover={handleOnHover}
        onSelect={handleOnSelect}
        // onFocus={handleOnFocus}

        className="SearchStyle"
        autoFocus
        formatResult={formatResult}
      />
    </Stack>
  );
};

export default SearchBar;
