import { Button, Checkbox, Input, Wrap } from "@chakra-ui/react";
import React, { useState } from "react";

interface SearchInputProps {
  name: string;
  options: Array<string>;
  setSelectedCategory: (value: Array<string>) => void;
  selectedCategory: Array<string>;
  setSelectedSize: (value: string) => void;
  selectedSize: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  options,
  setSelectedCategory,
  selectedCategory,
  setSelectedSize,
  selectedSize,
}) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <Input
        placeholder={`Search ${name}`}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {options && name === "product" && (
        <>
          {options
            ?.filter((option) =>
              option.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((option, id) => (
              <Checkbox
                value={option}
                key={id}
                isChecked={selectedCategory.includes(option)}
                onChange={() =>
                  selectedCategory.includes(option)
                    ? setSelectedCategory(
                        selectedCategory.filter((data) => data !== option)
                      )
                    : setSelectedCategory([...selectedCategory, option])
                }
                colorScheme="green"
              >
                {option}
              </Checkbox>
            ))}
        </>
      )}

      {options && name === "size" && (
        <Wrap>
          {options
            ?.filter((option) => option.toLowerCase().includes(searchItem))
            .map((option, id) => (
              <Button
                key={id}
                size="xs"
                colorScheme="blue"
                variant={selectedSize === option ? "solid" : "outline"}
                onClick={() =>
                  selectedSize === option
                    ? setSelectedSize("")
                    : setSelectedSize(option)
                }
              >
                {option}
              </Button>
            ))}
        </Wrap>
      )}
    </>
  );
};

export default SearchInput;
