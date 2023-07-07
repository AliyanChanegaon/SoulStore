import { FilterOptionsModel } from "./filter-options-model";
import { ProductModel } from "./product-data-model";

export type DataModel = {
    breadcrumbData: { path: string ,page: string };
    mensItem: Array<ProductModel>;
    options: FilterOptionsModel;
    sliderImages?: Array<string> ;
  };
  