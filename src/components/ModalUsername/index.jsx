import Modal from "../Modal"
export default function ModalUsername({submit,handleChange}){
    return(
       <Modal>
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                Juego de Señas
                </h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick="toggleModal('modal-id')">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                </span>
                </button>
            </div>
            <form onSubmit={submit}>
            <div className="relative p-6 flex-auto">
            <div>
                <label htmlFor="first_name" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" id="first_name" 
                name="first_name"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                p-2.5
                " 
                placeholder="John" required/>
            </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase 
                text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
                ease-linear transition-all duration-150" type="submit">
                Guardar
                </button>
            </div>
            </form>
       </Modal> 
    )
}