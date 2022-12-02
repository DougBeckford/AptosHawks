import React, { useState,useEffect } from "react";
import styles from '../../styles/Home.module.css'

import {useWallet} from "@manahippo/aptos-wallet-adapter"

import ConnectWalletModal from "./ConnectWalletModal"

const ConnectWalletButton = (props) => {
    const {connectButton, className, style, disabled} = props

    const wallet = useWallet()
    const [showModal, setShowModal] = useState(false)

    function handleButtonClick() {
        if (connectButton) {
            setShowModal(true)
            return
        }
        props.handleTheClick("");
        wallet.disconnect()
    }

    useEffect(()=>{
        if(wallet?.account?.address){
            console.log("wallet.account: ",wallet.account.address)
            props.handleTheClick(wallet.account.address);
        }
    },[wallet])


    const button = <button disabled={disabled} className={`${styles.connectWalletBtn} ${className} ${disabled ? "disabled" : ""}`} onClick={handleButtonClick} style={style}>
        {connectButton ? "Connect Wallet" : "Disconnect"}
    </button>

    return (
        <>
        {connectButton ? button : wallet.account?.address?.toString() !== undefined ? <span className="mx-auto w-100">{button}</span> : null}
        <ConnectWalletModal show={showModal} onConnect={() => setShowModal(false)} />
        </>
    )
}

export default ConnectWalletButton;
