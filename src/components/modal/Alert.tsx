
interface Props{
    handleSave: () => void;
    toggleAlert: () => void;
}

export default function Alert(props:Props) {
    const {handleSave,toggleAlert} = props
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 z-50">
    

    
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 id="modal-title" className="text-lg font-semibold mb-4">
            Do you want to save the file?
          </h2>
          <p className="text-gray-600 mb-6">
            Make sure your have all editors closed.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save and Close
            </button>
            <button
              onClick={toggleAlert}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    
  </div>
  )
}
