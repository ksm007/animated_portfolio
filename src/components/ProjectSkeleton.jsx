import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image skeleton */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[16/9] bg-primary-200 dark:bg-primary-800 rounded-xl"></div>
        </div>

        {/* Content skeleton */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Title skeleton */}
          <div className="space-y-2">
            <div className="h-8 bg-primary-200 dark:bg-primary-800 rounded w-3/4"></div>
            <div className="h-4 bg-primary-100 dark:bg-primary-900 rounded w-1/2"></div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-primary-100 dark:bg-primary-900 rounded w-full"></div>
            <div className="h-4 bg-primary-100 dark:bg-primary-900 rounded w-5/6"></div>
            <div className="h-4 bg-primary-100 dark:bg-primary-900 rounded w-4/6"></div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary-200 dark:bg-primary-800 rounded"></div>
                <div className="space-y-1">
                  <div className="h-3 bg-primary-200 dark:bg-primary-800 rounded w-8"></div>
                  <div className="h-2 bg-primary-100 dark:bg-primary-900 rounded w-12"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags skeleton */}
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-6 bg-primary-100 dark:bg-primary-800 rounded-full"
                style={{ width: `${60 + i * 10}px` }}
              ></div>
            ))}
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-wrap gap-3">
            <div className="h-10 bg-primary-200 dark:bg-primary-800 rounded-lg w-24"></div>
            <div className="h-10 bg-primary-100 dark:bg-primary-900 rounded-lg w-28"></div>
          </div>

          {/* Details button skeleton */}
          <div className="h-10 bg-primary-100 dark:bg-primary-800 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

const ProjectSkeletonGrid = ({ count = 3 }) => {
  return (
    <div className="grid gap-12">
      {Array.from({ length: count }, (_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
};

export { ProjectSkeleton, ProjectSkeletonGrid };
export default ProjectSkeleton;
