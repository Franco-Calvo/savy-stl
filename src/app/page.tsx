import CustomDesigns from "@/Components/Presentation/CustomDesigns/CustomDesigns";
import OurHome from "@/Components/Presentation/OurHome/OurHome";
import IndexHome from "@/Components/Presentation/Home/Home";

export default function Home() {
  return (
    <main>
      <IndexHome />
      <OurHome />
      <CustomDesigns />
    </main>
  );
}
