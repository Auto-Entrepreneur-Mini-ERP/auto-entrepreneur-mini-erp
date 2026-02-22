
type ModalCreateDocumentProps = {
    isPaymentModalOpen: boolean,
    setIsPaymentModalOpen: (isOpen: boolean) => void
}

function ModalCreateDocument({
    isPaymentModalOpen,
    setIsPaymentModalOpen
}: ModalCreateDocumentProps) {
  return (
    <div>ModalCreateDocument</div>
  )
}

export default ModalCreateDocument