

function Nav() {
  return (
    <>
     <nav className="bg-black p-5">
        <div className="container mx-auto flex text-center justify-between">
            <a href="#" className="text-white text-xl font-bold text-left">JAYRAJ</a>
            <div className="hidden md:flex space-x-25 ">
                <a href="#" className="text-white hover:text-gray-200">Home</a>
                <a href="#about" className="text-white hover:text-gray-200">About</a>
                <a href="#work" className="text-white hover:text-gray-200">Work</a>
                <a href="#con" className="text-white hover:text-gray-200">Contact Me</a>
       
            </div>
            <button id="menu-btn" className="md:hidden text-white focus:outline-none">
                ☰
            </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden flex flex-col space-y-2 p-4">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>
    </nav>
    </>
  )
}

export default Nav