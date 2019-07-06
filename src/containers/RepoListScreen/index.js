import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert } from 'react-native';
import { getRepos } from "../../store/actions/RepoScreenAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from "./styles";

class ReopListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            dataSource: []
        }
    }

    componentDidMount() {
        this.props.getRepos("text");
    }

    SearchFilterFunction(text) {
        this.props.getRepos(text);
        this.setState({
            text: text
        })
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
                <TextInput
                    style={styles.TextInputStyleClass}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Search for Repository"
                />
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    extraData={this.state.isLoading}
                    renderItem={({ item, index }) => <Text key={"" + item.id} style={styles.rowViewContainer}
                    >
                        {item.name}</Text>}
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                />
            </View>
        );
    }

    componentWillReceiveProps(nextProps) {

        console.log("pp", nextProps)
        if (!nextProps.repoReducer.isLoading && nextProps.repoReducer.error == null) {
            console.log("nextprops", (nextProps.repoReducer.repoData))
            this.setState({
                dataSource: nextProps.repoReducer.repoData
            });
        }
    }
}

function mapStateToProps(state) {
    return {
        repoReducer: state.repoReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getRepos: getRepos
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReopListScreen);
