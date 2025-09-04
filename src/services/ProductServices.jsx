import ApiBaseServices from "./ApiBaseServices";

export function ProductDescriptionApi(param="img-worlds-of-adventure-dubai"){
    return ApiBaseServices.get(`webadmin/api//get_products_detail_content.php?product_slug=${param}`)
}

export function ProductListApi(cityId = 20, limit = 10) {
  return ApiBaseServices.get(
    `webadmin/api//get_products.php?limit=${limit}&city_id=${cityId}`
  );
}