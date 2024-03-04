const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="#" className="flex items-center">
            <img src="../../public/logo5.png" alt="" className="h-9" />
          </a>
          <p>© 2024 Tools House.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer