import { useEffect, useState } from "react";

const Accordion = ({ data: dataFromSource }) => {
    const [data, setData] = useState([]);
    const [canMultipleOpen, setCanMultipleOpen] = useState(false);

    useEffect(() => {
        const dataWithActiveKey = dataFromSource.map(data => {
            return {
                ...data,
                isOpen: false
            }
        })
        setData(dataWithActiveKey)
    }, [dataFromSource])

    const toggle = (itemId) => {
        const updatedData = data.map(i => {
            if(canMultipleOpen) {
                if(i.id === itemId) {
                    i.isOpen = !i.isOpen
                }
                return i;
            }

            if(i.id === itemId) {
                i.isOpen = !i.isOpen
            } else {
                i.isOpen = false;        
            }
        
            return i;
        });

        setData(updatedData)
    }

    const onCheckboxChange = () => {
        const setAllInActive = data.map(item => {
            item.isOpen = false;
            return item;
        })
        setCanMultipleOpen(!canMultipleOpen)
        setData(setAllInActive)
    }

    return (
        <>
            <h2>Accordion</h2>
            <div style={{ marginBottom: "12px" }}>
                <span>Is multiple accordion allowed ?</span>
                <input type="checkbox" checked={canMultipleOpen} onChange={onCheckboxChange} />
            </div>
            <div style={{
                width: "800px"
            }}>
            {data.map(each => {
                return <AccordionItem key={each.id} id={each.id} isMultiple={canMultipleOpen} isOpen={each.isOpen} title={each.title} content={each.content} toggle={toggle} />
            })}
        </div>
        </>
    )
}

const AccordionItem = ({ id, title, content, isOpen, toggle }) => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                background: "#334155",
                width: "100%",
                padding: "12px 20px",
                marginBottom: "12px",
                borderRadius: "10px"
            }} key={id}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <h3>{title}</h3>
                    <button onClick={() => toggle(id)}>{isOpen ? "⬆️" : "⬇️"}</button>
                </div>
                <div>
                    {isOpen ? <p>{content}</p> : ""}
                </div>
            </div>
            
        </>
        
    )
}

export default Accordion;