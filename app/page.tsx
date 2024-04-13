import Banner from "./components/banner/banner";
import CategoryList from "./components/categoryList/categoryList";
import Testimonials from "./components/testimonials/testimonials";

export default function Home() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1654534863292-58137fbbcb64?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695067693935-2638994489e5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1657724370859-06e7ec0daea2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more image URLs as needed
  ];

  const categoryList = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "candles",
      availableItems: 18,
      link: "candles",
      id: 5555,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Diffusers",
      availableItems: 22,
      link: "Diffusers",
      id: 5555,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fragrance Oil",
      availableItems: 21,
      link: "Fragrance-oil",
      id: 5555,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Gift Sets",
      availableItems: 20,
      link: "gift-sets",
      id: 5555,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Accessories",
      availableItems: 10,
      link: "Accessories",
      id: 5555,
    },
  ];

  return (
    <>
      <Banner images={images} />
      <CategoryList categoryList={categoryList} />
      <CategoryList categoryList={categoryList} />
      <CategoryList categoryList={categoryList} />
      <CategoryList categoryList={categoryList} />
      <Testimonials />
    </>
  );
}
