const URL = "http://localhost:5000";

export async function postProjects(project) {
  try {
    const response = await fetch(`${URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    await response.json();

    return true;
  } catch (error) {
    return error.message;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function getProjectById(id) {
  try {
    const response = await fetch(`${URL}/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function patchProject(id, updatedProject) {
  try {
    const response = await fetch(`${URL}/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function putProject(id, project) {
  try {
    const response = await fetch(`${URL}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function getProjects() {
  try {
    const response = await fetch(`${URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export async function deleteProjectById(id) {
  try {
    const response = await fetch(`${URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();

    return true;
  } catch (error) {
    return error.message;
  }
}

export async function patchProjectServices(projectUpdated) {
  try {
    const response = await fetch(`${URL}/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    });

    await response.json();

    return true;
  } catch (error) {
    return error.message;
  }
}
