import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export const Post = () => {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get(""));

  return <div>Post</div>;
};
