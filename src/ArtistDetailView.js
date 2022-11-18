import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ArtistBox from "./ArtistBox";

export default class ArtistDetailView extends Component {
  render() {
    const artists = this.props.artists;

    return (
      <View style={styles.container}>
        <ArtistBox artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: 0,
  },
});
