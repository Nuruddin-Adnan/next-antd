'use client'

import Modal from "@/components/ui/modal/Modal";
// import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";

export default function ModalPage() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
                onClick={openModal}
            >
                Open Modal
            </button>


            {
                isOpen &&
                <Modal onCloseModal={closeModal} openModal={isOpen} className="max-w-3xl" title='Hello this is dynamic title' footerCloseBtn footerCloseBtnText="Close it!" footerCloseBtnClassName="bg-red-500 text-white hover:bg-red-600" footerCloseBtnPosition="right">
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quibusdam minima eligendi necessitatibus, consequuntur at dolore? Magnam laudantium a nemo, iusto unde vero commodi, nisi corrupti id quod dolorum iste!
                    </p>
                </Modal>
            }

        </div>
    );
}
