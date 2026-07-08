import Card from "./components/Card";

function App() {
  return (
    <main className="h-screen bg-[#616161] w-full ">
      <div>
        <Card
          info={{
            name: "Simon James",
            image: "/simon.jpg",
            profession:
              "Product Designer who focuses on simplicity & usability",
            followers: 312,
            following: 40,
            verified: true,
          }}
        ></Card>
        <Card
          info={{
            name: "Molly Blacksmith",
            image: "/molly.jpg",
            profession:
              "the desperate insistence on loving and pursuing sorrow",
            followers: 210,
            following: 20,
            verified: false,
          }}
        ></Card>
        <Card
          info={{
            name: "John Smith",
            image: "/john.jpg",
            profession:
              "described the translation “like extreme Mallarmé, or a cut-up",
            followers: 500,
            following: 85,
            verified: true,
          }}
        ></Card>
      </div>
    </main>
  );
}

export default App;
