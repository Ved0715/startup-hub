import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams } : {searchParams: Promise<{ query?: string}>}) {

  const query = (await searchParams).query

  const post = [{
    _createdAt: new Date(),
    _id:1,
    views: 55,
    author: { _id: 1 , name: "Adrian"},
    description: "This is a description",
    image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    catagory:"Robot",
    title: "We Robot"
  },
]

  return (
    <>
    <section className="blue_container">
      <h1 className="heading">Pitch Your Startup, <br /> connect with Entrepreneur</h1>
      <p className="sub-heading !max-w-3xl"> Submit Ideas, Vote on Pitches, and Get Noticed in virtual COmputations </p>
      <SearchForm query={query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {post?.length > 0 ? (
          post.map((post: StartupCardType, index: number) =>(
            <StartupCard key={post?._id } post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </section>
    </>
  );
}
