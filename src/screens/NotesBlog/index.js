import React, { Component } from "react";

// Material UI
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// CSS
import "./NotesBlog.css";

// Components
import CustomTextField from "../../components/CustomTextField";

class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteTitle: "",
      noteContent: "",
      test: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    let stringNotes = localStorage.getItem("notes");
    if (stringNotes) {
      let parsedNotes = JSON.parse(stringNotes);
      this.setState({
        notes: parsedNotes,
      });
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { noteTitle, noteContent, notes } = this.state;
    const newNotes = [...notes, { title: noteTitle, content: noteContent }];
    const stringNewNotes = JSON.stringify(newNotes);
    localStorage.setItem("notes", stringNewNotes);
    this.setState({
      notes: newNotes,
      noteTitle: "",
      noteContent: "",
      test: "",
    });
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { noteTitle, noteContent, notes } = this.state;

    const UINotes = notes.map(({ title, content }, index) => (
      <ListItem key={index} className="List-item">
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ));

    return (
      <>
        <Container maxWidth="md">
          <List dense={true}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form onSubmit={this.handleFormSubmit}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CustomTextField
                  value={noteTitle}
                  name={"noteTitle"}
                  label={"Test input2"}
                  callback={this.handleChangeInput}
                />
                <CustomTextField
                  value={noteContent}
                  name={"noteContent"}
                  label={"Test input3"}
                  callback={this.handleChangeInput}
                />
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </>
    );
  }
}

export default NotesBlog;
