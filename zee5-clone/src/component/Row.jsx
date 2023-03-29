import React from "react";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Box, Flex, Card, Image, Heading , Skeleton} from "@chakra-ui/react";
import { AppContext } from "../context/ContextProvider";
// import MultipleItems from "./MultipleItems";
const Row = ({ name, fetched }) => {
  const [rowData, setRowData] = useState([]);
   const {setLoading,setErr,loading,err}=useContext(AppContext)
  //console.log(fetched)
  let axiosData = async (fetched) => {

    try {
      setLoading(true)
      let data = await axios.get(fetched);
      //console.log(data)
      setRowData(data?.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setErr(true)
      setLoading(false)
    }
  };

  
  //console.log(rowData)

  useEffect(() => {
    axiosData(fetched);
  }, [fetched]);
  return (
    <Box>
      {loading && <Skeleton/>}
      {err && <Heading>Something Wrong</Heading>}
      <Heading  color="white" fontSize="3xl">{name}</Heading>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        overflowX="scroll"
        overflowY="hidden"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {rowData?.map((ele) => {
          return (
            <Card
              variant="outline"
              objectFit="contain"
              w="100%"
              maxH="300px"
              key={ele.id}
              mr="5px"
              transition="transform 450ms"
              _hover={{ transform: "scale(1.09)" }}
              border
             
            >
              <Image src={ele.image} alt="Caffe Latte" borderRadius='lg' />
  {/* <MultipleItems newImg={ele.image}/> */}
            </Card>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Row;
