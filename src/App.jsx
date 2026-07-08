import Card from "./components/Card";

function App() {
  return (
    <main className="h-screen bg-[#616161] flex items-center justify-center">
      <div className="flex gap-24.5">
        <Card
          info={{
            name: "Simon James",
            image: "/public/simon.jpg",
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
            image: "/public/molly.jpg",
            profession:
              "the desperate insistence on loving and pursuing sorrow",
            followers: 210,
            following: 20,
            verified: false,
          }}
        ></Card>
        <Card
          info={{
            name: "Nick Richardson",
            image: "/public/john.jpg",
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
