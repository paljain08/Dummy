import React ,{useState , useEffect} from "react";
import axios from "axios";
import {useParams,useHistory} from "react-router-dom";

function EditProject(){
    let history=useHistory();
    const { id } = useParams();
    const [projectData, setProjectData] = useState({
      projectTitle:"",
      projectDescription:"",
      projectLogo:"",
    });

    const { projectTitle,projectDescription,projectLogo } = projectData;
    function onInputChange(e) {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
      }
    
      useEffect(() => {
        loadProject();},[]);
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:3003/projects/" + id, projectData);
        history.push("/");
      };
    
      const loadProject = async () => {
        const result = await axios.get("http://localhost:3003/projects/" +id);
        setProjectData(result.data);
      };
    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Update Project</h2>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
          <div className="form-group">
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Project Title"
                nameName="projectTitle"
                value={projectTitle}
                onChange={(e) => onInputChange(e)}
            />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Project Description "
                name="projectDescription"
                value={projectDescription}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Project Logo"
                name="projectLogo"
                value={projectLogo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <button className="btn btn-warning btn-block">Update Project</button>
          </form>
        </div>
      </div>
    );

}
export default EditProject;