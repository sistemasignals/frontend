export default function Modal({children,classNameBody}){
    return(
        <>
        <div className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className={"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none " + classNameBody}>
                {children}
            </div>
        </div>
        </div>
        <div className="block opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>
        </>
    )
}