import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/nav/Navbar";
import TaskList from "../../components/taskList/TaskList";
const Home = () => {
  return (
    <Layout>
      <Navbar />
      <TaskList />
    </Layout>
  );
};

export default Home;
