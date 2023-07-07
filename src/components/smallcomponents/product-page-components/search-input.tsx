import { Button, Checkbox, Input, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SearchInput = (data: { name: string; options: Array<string> }) => {
  const [searchItem, setSearchItem] = useState("");
  const [optionsData, setOptions] = useState<Array<string>>([]);
  

  useEffect(() => {
    if (data.options) {
      setOptions(data?.options);
    }
  }, []);

  return (
    <>
      <Input
        placeholder={`Search ${data?.name}`}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {optionsData && data?.name === "product" && (
        <>
          {optionsData
            ?.filter((option) => option.toLowerCase().includes(searchItem))
            .map((option, id) => (
              <Checkbox key={id} colorScheme="green">
                {option}
              </Checkbox>
            ))}
        </>
      )}

      {optionsData && data?.name === "size" && (
        <Wrap>
          {optionsData
            ?.filter((option) => option.toLowerCase().includes(searchItem))
            .map((option, id) => (
              <Button key={id} size="xs" colorScheme="blue" variant="outline" >
                {option}
              </Button>
            ))}
        </Wrap>
      )}
    </>
  );
};

export default SearchInput;
