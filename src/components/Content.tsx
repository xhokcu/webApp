import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Content() {
  interface IFriend {
    name: string;
    city: string;
  }
  // shortcut
  // const friend : { name: string; age: number; }[] = []
  const initialFriends: IFriend[] = [
    {
      name: "helin",
      city: "izmir",
    },
    {
      name: "asli",
      city: "istanbul",
    },
  ];
  const [friends, setFriends] = useState(initialFriends);
  const [nameInput, setName] = useState<string>("");
  const [cityInput, setCity] = useState<string>("");
  const [friend, setFriend] = useState({});

  function addFriendHandler(): void {
    const friendValue: IFriend = {
      name: nameInput,
      city: cityInput,
    };
    setFriend(friendValue);
    setFriends([...friends, friendValue]);
  }

  function inputNameHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const nameValue: string = event.target.value;
    setName(nameValue);
  }
  function inputCityHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const cityValue: string = event.target.value;
    setCity(cityValue);
  }
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
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          gap: 4,
        }}
      >
        <TextField
          onChange={inputNameHandler}
          fullWidth={true}
          id="outlined-basic"
          label="Friend Name"
          variant="outlined"
        />
        <TextField
          onChange={inputCityHandler}
          fullWidth={true}
          id="outlined-basic"
          label="Friend Age"
          variant="outlined"
        />

        <Button
          fullWidth={true}
          onClick={addFriendHandler}
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
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="h5">{friend.name} </Typography>
              </Box>
              <Box>
                <Typography variant="h5">{friend.city}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Content;
