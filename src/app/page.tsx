import FooterTop from "@/components/Footer/FooterTop";
import Categories from "@/components/Home/categories/Categories";
import CategoryBanner from "@/components/Home/categoriesbanner/CategoryBanner";
import Hero from "@/components/Home/Hero/Hero";
import FamSearch from "@/components/Home/popular/FamSearch";
import HighlightProd from "@/components/Home/prodHighlight/HighlightProd";
import Product from "@/components/Home/products/Product";
import CategoryProvider from "@/components/providers/category/CateProv";
import ProdProv from "@/components/providers/products/ProdProv";

export default function Home() {
  return (
  <>

    <CategoryBanner />
    <Hero />
    <HighlightProd />
    <Categories />
     <Product />
     <FamSearch />

     {/* providers */}
    <CategoryProvider />
    <ProdProv  />
    <FooterTop />
  </>
  );
}
