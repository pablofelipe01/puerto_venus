import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image, AspectRatio } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";



export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();


  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Lbc id={id} />

        : 
        // This video will have equal sides
          // <AspectRatio maxW='560px' ratio={1}>
          //   <iframe
          //     title='Puerto Venus'
          //     src='https://www.youtube.com/embed/yQ8A4G35GG0'
          //     allowFullScreen
          //   />
          // </AspectRatio>
        
        <Image 
        src='https://i.imgur.com/DkP4r83.png'
        alt='Puerto Venus'>
          </Image>
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "FRQj1iA1EFJUup8ciXgHNNTLpQfpxW9nHoqEsLPHbN1f"}
} 

