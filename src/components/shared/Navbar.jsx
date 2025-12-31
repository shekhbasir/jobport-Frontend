import "./nav.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { UserStar, LogOut } from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {
  const user = false;

  return (
    <>
      <div className="parent">
        <div className="sarakam">
          <div className="lefts1">
            <span className="bas1">Job</span>{" "}
            <span className="bas2">Portal</span>
          </div>
          <div className="rights1">
            <Link to="/">
              <div className="bas3">Home</div>
            </Link>
            <Link to="/Jobs">
              <div className="bas3">Jobs</div>
            </Link>
            <Link to="/Browser">
              <div className="bas3">Browser</div>
            </Link>

            {!user ? (
              <div>
                <Link to="/Login">
                  <button className="bt1">login</button>
                </Link>

                <Link to="/Signup">
                  <button className="bt2">Signup</button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="ham1">
                  <div className="hampar">
                    <Avatar className="size-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <div className="jam">Sheikh Basir Mern Dev</div>
                    </div>
                  </div>
                  <div className="niche">
                    <div className="fal">
                      <UserStar />
                      <Button
                        variant="link"
                        className="text-[15px] cursor-pointer"
                      >
                        view profile
                      </Button>
                    </div>
                    <div className="fal1 ">
                      {" "}
                      <LogOut />{" "}
                      <Button variant="link" className="cursor-pointer">
                        logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

//here i am going to implemeting the code  for the ternery operator
//now i am giong to workning to the reote path and providing  the
