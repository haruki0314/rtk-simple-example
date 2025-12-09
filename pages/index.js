import { useSelector, useDispatch } from 'react-redux';
import { openModal1, closeModal1, openModal2, closeModal2 } from '../store';

export default function Home() {
  const modal1Open = useSelector((state) => state.modals.modal1Open);
  const modal2Open = useSelector((state) => state.modals.modal2Open);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={() => dispatch(openModal1())}>Open Modal 1</button>
      <button onClick={() => dispatch(openModal2())}>Open Modal 2</button>

      {modal1Open && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal 1</h2>
            <button onClick={() => dispatch(closeModal1())}>Close</button>
          </div>
        </div>
      )}

      {modal2Open && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal 2</h2>
            <button onClick={() => dispatch(closeModal2())}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
