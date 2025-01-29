if (getEssentials.endpoint === "image") {
  const promises = getEssentials.payload.map((item, index) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: "Bearer .................",
      },
      body: JSON.stringify({ media: item.media }),
    };

    return fetch(
      `https://gate.whapi.cloud/messages/media/${
        getEssentials.endpoint
      }?caption=${encodeURIComponent(item.caption)}&to=${to}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(`Image ${index + 1} sent:`, data);
        return data;
      })
      .catch((error) => {
        console.error(`Error sending image ${index + 1}:`, error);
        return { error, index };
      });
  });

  const results = await Promise.allSettled(promises);

  const results = await Promise.all(promises); // If any request fails, the entire batch fails.

  //   -----------OR-------------------

  console.log("All results:", results);
  return results;
}

//   🔹 Which One to Use?
// Use Promise.all if you need all requests to succeed or fail together.
// Use Promise.allSettled if you want all requests to complete, even if some fail. (Best choice for batch API calls like yours ✅).
