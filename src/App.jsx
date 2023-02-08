import { Button } from "@mui/material";
// import { Settings } from "@mui/icons-material/";
const App = () => {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "orange",
          },
        }}
      >
        Click ME
      </Button>
    </>
  );
};

export default App;
