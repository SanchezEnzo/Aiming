export function CardConfirm() {
  return (
    <>
      <section className='absolute flex justify-center items-center w-full h-screen'>
        <div className='relative flex flex-col justify-around items-center w-[200px] h-[150px]  bg-[#532caa] z-30 rounded-xl text-[#ebebeb] border border-white shadow'>
          <p className='font-bold'>
            {/* {language === 'English' ? 'Are you sure?' : 'Estás seguro?'} */}
          </p>
          <div className='flex'>
            <button
              className='block h-[40px] w-[40px] mx-4 rounded-xl border border-white hover:text-white'
              onClick={() => {
                // clearLeaderBoard()
                // handleConfirmClear()
              }}
            >
              {/* {language === 'English' ? 'Yes' : 'Si'} */}
            </button>
            <button
              className='block h-[40px] w-[40px] mx-4 rounded-xl border border-white hover:text-white'
              // onClick={handleConfirmClear}
            >
              No
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
