interface ToggleModalProps {
  modalRef: React.MutableRefObject<HTMLDivElement>
}

export const useModalHook = (props: ToggleModalProps) => {
  const toggleModal = (): void => {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      import('preline/preline').then((overlay) => {
        const { HSOverlay } = overlay
        HSOverlay.open(props.modalRef.current)
      })
    }
  }
  return { toggleModal }
}
