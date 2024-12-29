import Categories from "@/components/Home/categories/Categories";
import CategoryBanner from "@/components/Home/categoriesbanner/CategoryBanner";
import Hero from "@/components/Home/Hero/Hero";
import HighlightProd from "@/components/Home/prodHighlight/HighlightProd";
import CategoryProvider from "@/components/providers/category/CategoryPrider";

export default function Home() {
  return (
  <>

    <CategoryProvider />
    <CategoryBanner />
    <Hero />
    <HighlightProd />
    <Categories />
   
  </>
  );
}
