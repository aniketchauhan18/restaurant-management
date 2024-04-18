import CreateMenu from "../components/admin/CreateMenu";

function MenuPage() {
  
  return (
    <div className="flex flex-col h-dvh bg-cover bg-center">    
      <div className="w-full mt-4 flex">
        <div className="flex justify-center items-center">
          <CreateMenu />
        </div>
      </div>
    </div>
  )
}

export default MenuPage;