interface NavCoverProps {
    onClose: () => void;
}

const NavCover = ({ onClose }: NavCoverProps) => {
    return (
        <div 
            className="fixed inset-0 z-10"
            onClick={onClose}
        />
    )
}

export default NavCover