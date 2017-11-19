import gulp from 'gulp';
import project from '../aurelia.json';

export default function copyToBackend() {
  return gulp.src(['index.html','scripts/*'], {base: "."})
    .pipe(gulp.dest('../backend/src/main/webapp'));
}

