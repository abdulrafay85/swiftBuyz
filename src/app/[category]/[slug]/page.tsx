import SlugPage from "./slugPage";


const page = ({ params }: {params:{slug:string}}) => {
  return (
    <section className="body-font overflow-hidden">
      <SlugPage params={params} />
    </section>
  );
};

export default page;
