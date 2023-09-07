import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Content() {
  interface IFriend {
    name: string;
    age: number;
  }
  // shortcut
  // const friend : { name: string; age: number; }[] = []
  const initialFriends: IFriend[] = [
    {
      name: "helin",
      age: 23,
    },
    {
      name: "beril",
      age: 25,
    },
  ];
  const [friends, setFriends] = useState(initialFriends);
  return (
    <Box
      sx={{
        // backgroundColor: "grey",
        m: 4,
        p: 4,
      }}
    >
      <Box
        sx={{
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Button
          fullWidth={true}
          variant="contained"
          sx={{
            borderRadius: 8,
            p: 2,
          }}
        >
          Add Friend
        </Button>
      </Box>
      <Box
        sx={{
          // backgroundColor: "blue",
          p: 2,
        }}
      >
        {friends.map((friend) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                boxShadow: 2,
                borderRadius: 8,
                px: 4,
                py: 4,
                my: 4,
              }}
            >
              <Typography>{friend.name}</Typography>
              <Typography>{friend.age}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Content;
