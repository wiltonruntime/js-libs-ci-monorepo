#!/bin/bash
#
# Copyright 2018, alex at staticlibs.net
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -x
set -e

for fi in `ls css` ; do
    # primary
    sed -e s/007bff/2e6da4/g css/$fi > css/$fi.tmp1
    # primary:hover
    sed -e s/0069d9/286090/g css/$fi.tmp1 > css/$fi.tmp2
    # primary:hover border
    sed -e s/0062cc/204d74/g css/$fi.tmp2 > css/$fi
    # cleanup
    rm css/$fi.tmp1
    rm css/$fi.tmp2
done

