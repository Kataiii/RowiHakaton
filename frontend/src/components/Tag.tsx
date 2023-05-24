interface TagProps{
    content: string;
    action?: () => void;
}


const Tag = (props: TagProps) => {
    const onClickHandler = () => {

    }
    
    return(
            <p onClick={onClickHandler}>{props.content}</p>
    )
}

export default Tag;