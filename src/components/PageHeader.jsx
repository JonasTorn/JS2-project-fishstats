const PageHeader = ({ children }) => {
    return (
      <div className="bg-blue-100 py-12 lg:py-24 w-full">
        <h1 className="mx-[10vw] px-6 w-full mb-4 max-w-2xl place-self-center text-4xl font-extrabold lg:text-5xl">
          {children}
        </h1>
      </div>
    );
  }
  export default PageHeader;