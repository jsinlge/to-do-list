import Modal from "./Modal"
import { AiOutlinePlus } from "react-icons/ai"

const AddTask = () => {
    return <div>
        <button className="btn btn-primary w-full">Add new task
            <AiOutlinePlus className='ml-2' size={18} />
        </button>

        <Modal />
    </div>;
};

export default AddTask;