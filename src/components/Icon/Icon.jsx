import React from 'react';
import './Icon.css'

export default (props) => {
    let path = {
        like: <path d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192" p-id="3085"></path>,
        share: <path d="M736 608a127.776 127.776 0 0 0-115.232 73.28l-204.896-117.056a30.848 30.848 0 0 0-9.696-3.2A127.68 127.68 0 0 0 416 512c0-6.656-0.992-13.088-1.984-19.456 0.608-0.32 1.28-0.416 1.856-0.768l219.616-125.472A127.328 127.328 0 0 0 736 416c70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128c0 6.72 0.992 13.152 1.984 19.616-0.608 0.288-1.28 0.256-1.856 0.608l-219.616 125.472A127.328 127.328 0 0 0 288 384c-70.592 0-128 57.408-128 128s57.408 128 128 128a126.912 126.912 0 0 0 84.544-32.64 31.232 31.232 0 0 0 11.584 12.416l224 128c0.352 0.224 0.736 0.256 1.12 0.448C615.488 812.992 669.6 864 736 864c70.592 0 128-57.408 128-128s-57.408-128-128-128" p-id="3349"></path>,
        message: <path d="M688 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96M512 544a48 48 0 1 1 0-96 48 48 0 0 1 0 96m-176 0a48 48 0 1 1-0.032-95.968A48 48 0 0 1 336 544M805.312 192H218.688C186.336 192 160 219.488 160 253.248v471.392c0 33.792 26.4 61.248 58.816 61.248h189.344c5.888 0 15.648 5.728 18.304 10.752l38.08 71.968 2.912 4.544c11.136 14.496 27.36 22.816 44.48 22.848h0.032c17.152 0 33.376-8.32 44.576-22.816l40.992-76.544c2.432-4.576 11.936-10.752 18.336-10.752h189.504c32.32 0 58.624-27.456 58.624-61.248V253.248C864 219.488 837.664 192 805.312 192" p-id="3481"></path>,
        browse: <path d="M376.16 551.936v-71.872a128.16 128.16 0 0 1 128-128.064c70.592 0 128 57.44 128 128.064v71.872a128.16 128.16 0 0 1-128 128.064c-70.592 0-128-57.44-128-128.064m494.88-80.96c-2.048-4.704-26.72-59.936-78.88-116.928C733.696 290.144 640.576 224 504.16 224s-229.6 66.24-288 130.016c-52.096 56.864-76.608 111.68-78.208 115.488-12.736 24.896-13.056 60.896-2.016 82.816 0.48 1.248 24.32 60.96 80.224 121.44 57.984 62.72 150.464 126.24 288 126.24 137.504 0 230.08-63.68 288-126.208 55.872-60.32 79.52-119.616 79.552-119.776 11.744-24.896 10.88-61.664-0.672-83.008" p-id="3745"></path>,
        trash: <><path d="M736 352.032L736.096 800h-0.128L288 799.968 288.032 352 736 352.032zM384 224h256v64h-256V224z m448 64h-128V202.624C704 182.048 687.232 160 640.16 160h-256.32C336.768 160 320 182.048 320 202.624V288H192a32 32 0 1 0 0 64h32V799.968C224 835.296 252.704 864 288.032 864h447.936A64.064 64.064 0 0 0 800 799.968V352h32a32 32 0 1 0 0-64z" p-id="4273"></path><path d="M608 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32M416 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32" p-id="4274"></path></>,
        search: <path d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28" p-id="4141"></path>,
        editor: <><path d="M489.376 534.624a31.904 31.904 0 0 0 45.248 0l304-304a31.968 31.968 0 1 0-45.248-45.248l-304 304a31.968 31.968 0 0 0 0 45.248" p-id="4406"></path><path d="M832 480a32 32 0 0 0-32 32l0.256 288L224 800.256 223.744 224H512a32 32 0 0 0 0-64H223.744A63.84 63.84 0 0 0 160 223.744v576.512C160 835.392 188.608 864 223.744 864h576.512A63.84 63.84 0 0 0 864 800.256V512a32 32 0 0 0-32-32" p-id="4407"></path></>,
        hot: <path d="M448.533333 155.797333c67.968 53.098667 115.498667 104.618667 142.592 154.602667 25.664 47.36 35.968 95.808 30.912 145.344l-0.981333 8.256 5.034667-4.117333a143.829333 143.829333 0 0 0 40.533333-57.536l2.218667-6.122667 6.336-19.029333c67.776 46.037333 101.674667 124.010667 101.674666 233.898666 0 164.821333-144.426667 270.037333-263.125333 270.037334-118.72 0-253.866667-70.506667-275.733333-218.069334-21.845333-147.541333 68.757333-216.426667 130.474666-312.533333 41.173333-64.064 67.84-128.981333 80.064-194.730667z m27.754667 127.744a672.576 672.576 0 0 1-53.973333 101.568l-6.826667 10.453334c-6.933333 10.346667-14.293333 20.629333-23.744 33.365333l-33.749333 45.013333c-52.416 71.786667-66.666667 112.405333-56.682667 179.754667 14.72 99.562667 105.706667 163.434667 212.416 163.434667 99.562667 0 199.125333-91.669333 199.125333-206.037334 0-51.221333-8.106667-92.010667-23.978666-123.712-6.784 7.765333-14.186667 15.104-22.208 21.973334l-131.029334 107.456 21.994667-161.450667c5.269333-38.656-2.048-76.202667-22.762667-114.453333-10.88-20.074667-26.346667-41.109333-46.442666-62.933334l-6.869334-7.296-5.269333 12.864z" p-id="6575"></path>,
        all: <path d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256z m-362.666666 64h-192v192h192v-192z m362.666666 0h-192v192h192v-192zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320zM426.666667 234.666667h-192v192h192v-192z m266.666666 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192z" p-id="6707"></path>,
        upload: <path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256h-85.376z" fill="#ffffff" p-id="2907"></path>,
        write: <><path d="M791 875.42H215.28c-30.52 0-55.27-24.74-55.27-55.27V240.99c0-30.52 24.74-55.27 55.27-55.27h370.67c15.26 0 27.63 12.37 27.63 27.63s-12.37 27.63-27.63 27.63H256.93c-23 0-41.64 18.64-41.64 41.64V778.5c0 23 18.64 41.64 41.64 41.64h492.42c23 0 41.64-18.64 41.64-41.64V460.54c0-15.26 12.37-27.63 27.63-27.63s27.63 12.37 27.63 27.63v359.61c0.01 30.53-24.73 55.27-55.25 55.27z" p-id="6926" fill="#e6e6e6"></path><path d="M812.67 199c-17.71-17.71-46.42-17.71-64.12 0L407.51 540.04l-59.99 134.32c-3.41 13.06 8.14 25.13 21.34 22.31l139.71-53.41 0.01 0.01L850.7 301.16c17.71-17.71 17.71-46.42 0-64.12L812.67 199z m5.97 70.1l-27.37 27.37-38.03-38.03 27.37-27.37 38.03 38.03zM408.59 648.74c-6.04 4.07-13.1-3.51-8.62-9.25l37.77-67.06 36.97 36.97-66.12 39.34z m61.97-107.62L721.18 290.5l38.03 38.03-250.62 250.62-38.03-38.03z" p-id="6927" fill="#e6e6e6"></path></>,
        viewlist: <path d="M426.666667 533.333333a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m416 202.666667v64H533.333333v-64h309.333334zM426.666667 597.333333h-192v192h192v-192z m416 0v64H533.333333v-64h309.333334zM426.666667 170.666667a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m0 64h-192v192h192v-192z m416 128v64H533.333333v-64h309.333334z m0-138.666667v64H533.333333v-64h309.333334z" p-id="6985"></path>,
        rocket: <><path d="M753.2 446.4c-2.8 2.8-5.8 5.6-9 8.2-3.2 2.6-6.4 5-9.8 7.2-3.4 2.2-6.8 4.4-10.4 6.2-3.6 2-7.2 3.6-11 5.2s-7.6 3-11.4 4.2c-3.8 1.2-7.8 2.2-11.8 3-4 0.8-8 1.4-12 1.8a124.56 124.56 0 0 1-24.4 0c-4-0.4-8-1-12-1.8s-8-1.8-11.8-3c-3.8-1.2-7.8-2.6-11.4-4-3.8-1.6-7.4-3.2-11-5.2-3.6-2-7-4-10.4-6.2-3.4-2.2-6.6-4.6-9.8-7.2-3.2-2.6-6.2-5.2-9-8.2-2.8-2.8-5.6-5.8-8.2-9-2.6-3.2-5-6.4-7.2-9.8-2.2-3.4-4.4-6.8-6.2-10.4-2-3.6-3.6-7.2-5.2-11s-3-7.6-4.2-11.4c-1.2-3.8-2.2-7.8-3-11.8-0.8-4-1.4-8-1.8-12s-0.6-8-0.6-12.2c0-4 0.2-8.2 0.6-12.2s1-8 1.8-12 1.8-8 3-11.8c1.2-3.8 2.6-7.8 4.2-11.4 1.6-3.8 3.2-7.4 5.2-11 2-3.6 4-7 6.2-10.4 2.2-3.4 4.6-6.6 7.2-9.8 2.6-3.2 5.4-6.2 8.2-9 2.8-2.8 5.8-5.6 9-8.2 3.2-2.6 6.4-5 9.8-7.2 3.4-2.2 6.8-4.4 10.4-6.2 3.6-2 7.2-3.6 11-5.2s7.6-3 11.4-4c3.8-1.2 7.8-2.2 11.8-3 4-0.8 8-1.4 12-1.8a124.56 124.56 0 0 1 24.4 0c4 0.4 8 1 12 1.8s8 1.8 11.8 3c3.8 1.2 7.8 2.6 11.4 4.2 3.8 1.6 7.4 3.2 11 5.2 3.6 2 7 4 10.4 6.2 3.4 2.2 6.6 4.6 9.8 7.2 3.2 2.6 6.2 5.4 9 8.2 1.4 1.4 2.8 2.8 4.2 4.4 1.4 1.4 2.8 3 4 4.6 1.2 1.6 2.6 3.2 3.8 4.8 1.2 1.6 2.4 3.2 3.6 5 1.2 1.6 2.2 3.4 3.2 5.2 1 1.8 2 3.4 3 5.2 1 1.8 1.8 3.6 2.8 5.4 0.8 1.8 1.8 3.6 2.4 5.6s1.6 3.8 2.2 5.6c0.6 2 1.4 3.8 2 5.8 0.6 2 1.2 3.8 1.6 5.8 0.4 2 1 4 1.4 6 0.4 2 0.8 4 1 6 0.4 2 0.6 4 0.8 6 0.2 2 0.4 4 0.4 6 0.2 2 0.2 4 0.2 6s0 4-0.2 6-0.2 4-0.4 6-0.4 4-0.8 6-0.6 4-1 6-0.8 4-1.4 6c-0.4 2-1 4-1.6 5.8-0.6 2-1.2 3.8-2 5.8-0.6 2-1.4 3.8-2.2 5.6-0.8 1.8-1.6 3.8-2.4 5.6-0.8 1.8-1.8 3.6-2.8 5.4-1 1.8-2 3.6-3 5.2-1 1.8-2.2 3.4-3.2 5.2-1.2 1.6-2.4 3.4-3.6 5-1.2 1.6-2.4 3.2-3.8 4.8-1.2 1.6-2.6 3-4 4.6-1.2 1.6-2.8 3-4.2 4.4zM979 77.6s0-0.2 0 0c-0.4-2.2-1-4-1.8-6-0.8-1.8-1.6-3.6-2.6-5.4-1-1.8-2-3.4-3.2-5-1.2-1.6-2.4-3.2-3.8-4.6-1.4-1.4-2.8-2.8-4.4-4s-3.2-2.4-5-3.2c-1.8-1-3.6-1.8-5.4-2.6-1.8-0.8-3.8-1.4-5.6-1.8-62.8-15.4-161.8 1-271.4 44.8-110.4 44.6-213.8 110-283.8 180-22.4 22.4-43.2 46.2-62.4 71.4-47.2-2.2-88.6 4.6-123.6 19.8-121.8 53.6-156.4 190.8-165.8 247-0.4 2-0.6 4-0.6 6-0.2 2 0 4 0 6 0.2 2 0.4 4 0.8 6s0.8 4 1.4 5.8c0.6 2 1.2 3.8 2 5.6 0.8 1.8 1.8 3.6 2.8 5.4 1 1.8 2.2 3.4 3.4 5 1.2 1.6 2.4 3.2 3.8 4.6 1.4 1.4 2.8 2.8 4.4 4.2 1.6 1.4 3.2 2.6 4.8 3.6 1.6 1.2 3.4 2.2 5.2 3 1.8 1 3.6 1.8 5.6 2.4 1.8 0.8 3.8 1.4 5.8 1.8l6 1.2c2 0.2 4 0.4 6 0.4s4 0 6-0.2h0.2l135.6-14.8c0.2 1.8 0.4 3.4 0.6 4.8 0.4 4.2 1.2 8.2 2.4 12.2s2.6 7.8 4.4 11.6c1.8 3.8 3.8 7.2 6.2 10.6 2.4 3.4 5 6.6 8 9.4l66.2 66.2c3 3 6 5.6 9.4 8s7 4.4 10.6 6.2c3.8 1.8 7.6 3.2 11.6 4.4 4 1.2 8 1.8 12.2 2.4l4.6 0.4-14.8 135.6v0.2c-0.2 1.8-0.2 3.6-0.2 5.4 0 1.8 0 3.6 0.2 5.4s0.4 3.6 0.8 5.4c0.4 1.8 0.8 3.6 1.4 5.2 0.6 1.8 1.2 3.4 2 5.2 0.8 1.6 1.6 3.4 2.4 4.8 1 1.6 2 3.2 3 4.6 1 1.4 2.2 3 3.4 4.2 1.2 1.4 2.6 2.6 3.8 3.8 1.4 1.2 2.8 2.4 4.2 3.4 1.4 1 3 2 4.6 3 1.6 1 3.2 1.8 4.8 2.6 1.6 0.8 3.4 1.4 5.2 2 1.8 0.6 3.4 1 5.2 1.4 1.8 0.4 3.6 0.6 5.4 1 1.8 0.2 3.6 0.4 5.4 0.4 3 0 5.8-0.2 8.8-0.8 56.6-9.2 193.8-43.4 247.2-166 15.2-34.8 21.8-76 20-123 25.4-19 49.2-39.8 71.6-62.4 70.6-70.2 136.2-172.8 180-281.6 43.6-107.6 60-207.2 45-272.4z" p-id="3232"></path><path d="M313.6 787.2c-4-0.6-8.2-0.2-12.2 0.6-4 1-7.6 2.6-11 5-13.4 9.2-27 18.4-40.6 27.2-27.6 18-60.8-13.6-44.2-42.2l25.6-44.2c1-1.4 1.8-2.8 2.4-4.2 0.8-1.4 1.4-3 1.8-4.4 0.4-1.6 0.8-3.2 1.2-4.6 0.2-1.6 0.4-3.2 0.4-4.8 0-1.6 0-3.2-0.2-4.8-0.2-1.6-0.4-3.2-1-4.8-0.4-1.6-1-3-1.6-4.6s-1.4-3-2.2-4.2c-0.8-1.4-1.8-2.6-2.8-4-1-1.2-2.2-2.4-3.4-3.4-1.2-1-2.4-2-3.8-3s-2.8-1.8-4.2-2.4c-1.4-0.8-3-1.4-4.4-1.8-1.6-0.4-3.2-0.8-4.6-1.2-1.6-0.2-3.2-0.4-4.8-0.4-1.6 0-3.2 0-4.8 0.2-7 0.8-14 2.4-20.8 4.4-6.8 2-13.4 4.6-19.8 7.8s-12.4 6.8-18.2 11-11.2 8.8-16.2 13.8c-7.8 7.8-31.2 31.2-43.8 120.8-3.6 25.8-5.8 51.6-6.8 77.6v3.4c0 1.2 0.2 2.2 0.4 3.4 0.2 1.2 0.4 2.2 0.8 3.2s0.6 2.2 1 3.2 0.8 2 1.4 3 1 2 1.6 3c0.6 1 1.2 1.8 2 2.8 0.8 0.8 1.4 1.8 2.2 2.6 0.8 0.8 1.6 1.6 2.4 2.2 0.8 0.8 1.8 1.4 2.6 2 1 0.6 1.8 1.2 2.8 1.8 1 0.6 2 1 3 1.4 1 0.4 2 0.8 3.2 1.2 1 0.4 2.2 0.6 3.2 0.8 1.2 0.2 2.2 0.4 3.4 0.6 1.2 0.2 2.2 0.2 3.4 0.2h0.8c26-1 51.8-3.2 77.6-6.8 89.6-12.6 113-36.2 120.8-43.8 5-5 9.6-10.4 13.8-16.2s7.8-12 11-18.4c3.2-6.4 5.6-13 7.6-19.8 2-6.8 3.4-13.8 4.2-20.8 0.2-1 0.2-2.2 0.2-3.4v-3.4c0-1.2-0.2-2.2-0.4-3.2s-0.4-2.2-0.8-3.2c-0.2-1-0.6-2.2-1-3.2s-0.8-2-1.4-3c-0.4-1-1-2-1.6-2.8-0.6-1-1.2-1.8-2-2.8-0.6-0.8-1.4-1.8-2.2-2.6-0.8-0.8-1.6-1.6-2.4-2.2-0.8-0.8-1.8-1.4-2.6-2s-1.8-1.2-2.8-1.8c-1-0.6-2-1-3-1.4l-3-1.2c-1-0.4-2.2-0.6-3.2-0.8-0.8-1.2-2-1.4-3-1.4z" p-id="3233"></path></>,
        success: <><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#07C160" p-id="920"></path><path d="M466.7 679.8c-8.5 0-16.6-3.4-22.6-9.4l-181-181.1c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l158.4 158.5 249-249c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L489.3 670.4c-6 6-14.1 9.4-22.6 9.4z" fill="#FFFFFF" p-id="921"></path></>,
        warning: <><path d="M512 124c-214.3 0-388 173.7-388 388s173.7 388 388 388 388-173.7 388-388-173.7-388-388-388z m0 714c-180 0-326-146-326-326s146-326 326-326 326 146 326 326-146 326-326 326z" fill="#f5b01b" p-id="2623"></path><path d="M532 673.5h-40c-4.4 0-8 3.6-8 8v36c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-36c0-4.4-3.6-8-8-8zM532 620.5h-40c-4.4 0-8-3.6-8-8v-306c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v306c0 4.4-3.6 8-8 8z" fill="#f5b01b" p-id="2624"></path></>,
        error: <><path d="M168.18242 219.516576l48.700165-48.700165 633.096009 633.096009-48.699142 48.700165L168.18242 219.516576z" p-id="3892" fill="#d81e06"></path><path d="M216.882586 852.612585l-48.699142-48.700165 633.096009-633.096009 48.699142 48.699142L216.882586 852.612585z" p-id="3893" fill="#d81e06"></path></>
    }

    return (
        <i className='icon'>
            <svg viewBox="64 64 896 896" focusable="false" width={props['width'] || '25px'} height={props['height'] || '25px'} fill="currentColor" aria-hidden="true">
                {path[props.type]}
            </svg>
        </i>
    )
}